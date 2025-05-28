import React, { useState, useRef, useEffect } from 'react';
import { useCLI } from '../hooks/useCLI';

interface CLITerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CLITerminal: React.FC<CLITerminalProps> = ({ isOpen, onClose }) => {
  const { history, addToHistory, executeCommand, commands } = useCLI();
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isBooting, setIsBooting] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "SANAET CLASSIFIED TERMINAL v2.4.1",
    "Type 'help' for available commands."
  ];

  useEffect(() => {
    if (isOpen && !bootComplete) {
      setIsBooting(true);
      setBootComplete(false);
      // Clear all history for a fresh boot
      while (history.length > 0) {
        history.pop();
      }
      addToHistory("");
      // Start boot sequence
      const bootTimer = setTimeout(() => {
        bootSequence.forEach((line, index) => {
          setTimeout(() => {
            addToHistory(line);
            if (index === bootSequence.length - 1) {
              setIsBooting(false);
              setBootComplete(true);
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }
          }, index * 300);
        });
      }, 500);
      return () => clearTimeout(bootTimer);
    } else if (isOpen && bootComplete && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    // Auto-completion
    if (value.trim()) {
      const matches = commands
        .filter(cmd => cmd.command.startsWith(value.toLowerCase()))
        .map(cmd => cmd.command);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Prevent input during boot sequence
    if (isBooting) {
      if (e.key === 'Escape') {
        onClose();
      }
      return;
    }

    if (e.key === 'Enter') {
      if (input.trim()) {
        const fullCommand = `> ${input}`;
        addToHistory(fullCommand);
        
        const result = executeCommand(input);
        if (result) {
          addToHistory(result);
        }
        
        setCommandHistory(prev => [...prev, input]);
        setHistoryIndex(-1);
      }
      setInput('');
      setSuggestions([]);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };
  if (!isOpen) return null;

  const handleClose = () => {
    setBootComplete(false);
    setIsBooting(false);
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className={`w-full max-w-4xl h-[85vh] sm:h-96 bg-black/90 border border-primary/50 rounded-lg shadow-neon overflow-hidden ${isBooting ? 'terminal-boot' : ''}`}>
        <div className="flex items-center justify-between p-2 sm:p-3 border-b border-primary/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 sm:ml-3 font-mono text-primary text-xs sm:text-sm">
              {isBooting ? 'INITIALIZING...' : 'SANAET_TERMINAL'}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white font-mono text-xs sm:text-sm"
          >
            [ESC]
          </button>
        </div>
        
        <div 
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-2 sm:p-3 font-mono text-xs sm:text-sm text-green-400 bg-black"
          style={{ height: 'calc(100% - 60px)' }}
        >
          {history.map((line, index) => (
            <div key={index} className={line.startsWith('>') ? 'text-primary' : 'text-green-400'}>
              {line.split('\n').map((subLine, subIndex) => (
                <div key={subIndex} className="break-words">{subLine}</div>
              ))}
            </div>
          ))}
          {!isBooting && (
            <div className="flex items-center mt-2">
              <span className="text-primary shrink-0">guest@sanaet:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-green-400 ml-1 min-w-0 terminal-cursor"
                autoComplete="off"
                disabled={isBooting}
                style={{ caretColor: '#39FF14' }} // Bright green cyberpunk caret
              />
            </div>
          )}
          
          {suggestions.length > 0 && !isBooting && (
            <div className="mt-1 text-primary/60 text-xs break-words">
              Tab to complete: {suggestions.join(', ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CLITerminal;
