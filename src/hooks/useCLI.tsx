import React, { createContext, useContext, useState, useCallback } from 'react';
import { useSecurityClearance } from './useSecurityClearance';

interface CLICommand {
  command: string;
  description: string;
  execute: (args: string[]) => string;
}

interface CLIContextType {
  history: string[];
  addToHistory: (entry: string) => void;
  executeCommand: (input: string) => string;
  commands: CLICommand[];
}

const CLIContext = createContext<CLIContextType | undefined>(undefined);

export const CLIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { addSecurityPoints } = useSecurityClearance();
  const [history, setHistory] = useState<string[]>([
    "SANAET CLASSIFIED TERMINAL v2.4.1",
    "Type 'help' for available commands.",
    "Unauthorized access highly encouraged..."
  ]);

  const addToHistory = useCallback((entry: string) => {
    setHistory(prev => [...prev, entry]);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return `[SUCCESS] Navigating to ${sectionId.toUpperCase()} section...`;
    }
    return `[ERROR] Section '${sectionId}' not found.`;
  };

  const commands: CLICommand[] = [    {
      command: 'help',
      description: 'Display available commands',
      execute: () => {
        addSecurityPoints({
          type: 'cli_command',
          points: 5,
          description: 'Used help command'
        });
        const commandList = [
          '  help           - Display available commands',
          '  projects       - View mission archives',
          '  skills         - Display agent capabilities', 
          '  resume         - Access agent dossier',
          '  contact        - Open secure communication channel',
          '  download_cv    - Download classified resume',
          '  view_project   - View specific project <id>',
          '  hack           - Initialize hacking sequence',
          '  status         - Display system status',
          '  clear          - Clear terminal history',
          '  unlock         - Legacy unlock command'
        ].join('\n');
        return `Available Commands:\n${commandList}`;
      }
    },    {
      command: 'projects',
      description: 'View mission archives',
      execute: () => {
        addSecurityPoints({
          type: 'cli_navigation',
          points: 10,
          description: 'Navigated to projects via CLI'
        });
        return scrollToSection('projects');
      }
    },
    {
      command: 'skills',
      description: 'Display agent capabilities',
      execute: () => {
        addSecurityPoints({
          type: 'cli_navigation',
          points: 10,
          description: 'Navigated to skills via CLI'
        });
        return scrollToSection('skills');
      }
    },
    {
      command: 'resume',
      description: 'Access agent dossier',
      execute: () => {
        addSecurityPoints({
          type: 'cli_navigation',
          points: 15,
          description: 'Accessed resume via CLI'
        });
        return scrollToSection('resume');
      }
    },
    {
      command: 'contact',
      description: 'Open secure communication channel',
      execute: () => {
        addSecurityPoints({
          type: 'cli_navigation',
          points: 15,
          description: 'Accessed contact via CLI'
        });
        return scrollToSection('contact');
      }
    },    {
      command: 'download_cv',
      description: 'Download classified resume',
      execute: () => {
        addSecurityPoints({
          type: 'file_download',
          points: 20,
          description: 'Downloaded resume file'
        });
        const link = document.createElement('a');
        link.href = '/GEORGE SANAET SANKUI RESUME.pdf';
        link.download = 'GEORGE_SANAET_SANKUI_RESUME.pdf';
        link.click();
        return '[SUCCESS] Resume transmission initiated...';
      }
    },
    {
      command: 'view_project',
      description: 'View specific project <id>',
      execute: (args) => {
        if (!args[0]) return '[ERROR] Project ID required. Usage: view_project <id>';
        const projectId = parseInt(args[0]);
        if (isNaN(projectId) || projectId < 1 || projectId > 3) {
          return '[ERROR] Invalid project ID. Available: 1-3';
        }
        addSecurityPoints({
          type: 'project_view',
          points: 15,
          description: `Viewed project ${projectId} via CLI`
        });
        scrollToSection('projects');
        // Highlight specific project
        setTimeout(() => {
          const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
          if (projectElement) {
            projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            projectElement.classList.add('highlight-project');
            setTimeout(() => projectElement.classList.remove('highlight-project'), 3000);
          }
        }, 500);
        return `[SUCCESS] Displaying Project ${projectId}...`;
      }
    },
    {
      command: 'hack',
      description: 'Initialize hacking sequence',
      execute: () => {
        addSecurityPoints({
          type: 'easter_egg',
          points: 25,
          description: 'Executed hacking sequence'
        });
        // Trigger hacking animation
        document.body.classList.add('hacking-mode');
        setTimeout(() => document.body.classList.remove('hacking-mode'), 5000);
        return '[CLASSIFIED] Hacking sequence initiated...\n[WARNING] Unauthorized access detected!\n[SUCCESS] Firewall bypassed. Welcome, Agent.';
      }
    },    {
      command: 'status',
      description: 'Display system status',
      execute: () => {
        addSecurityPoints({
          type: 'system_check',
          points: 8,
          description: 'Checked system status'
        });
        const uptime = Math.floor(Date.now() / 1000) % 86400;
        return `System Status: OPERATIONAL\nSecurity Level: MAXIMUM\nUptime: ${Math.floor(uptime/3600)}h ${Math.floor((uptime%3600)/60)}m\nLocation: CLASSIFIED`;
      }
    },
    {
      command: 'clear',
      description: 'Clear terminal history',
      execute: () => {
        addSecurityPoints({
          type: 'cli_command',
          points: 3,
          description: 'Cleared terminal'
        });
        setHistory([
          "Terminal cleared.",
          "Type 'help' for available commands."
        ]);
        return '';
      }
    },
    {
      command: 'unlock',
      description: 'Legacy unlock command',
      execute: () => {
        addSecurityPoints({
          type: 'easter_egg',
          points: 30,
          description: 'Discovered unlock easter egg'
        });
        document.getElementById('easter-egg-reveal')?.classList.remove('hidden');
        return '[SUCCESS] Easter egg activated! Check the hero section.';
      }
    }
  ];  const executeCommand = useCallback((input: string) => {
    const [commandName, ...args] = input.trim().toLowerCase().split(' ');
    const command = commands.find(cmd => cmd.command === commandName);
    
    if (!command) {
      return `[ERROR] Unknown command: '${commandName}'. Type 'help' for available commands.`;
    }
    
    // Award general CLI usage points
    addSecurityPoints({
      type: 'cli_usage',
      points: 2,
      description: 'Used CLI terminal'
    });
    
    return command.execute(args);
  }, [commands, addSecurityPoints]);

  return (
    <CLIContext.Provider value={{ history, addToHistory, executeCommand, commands }}>
      {children}
    </CLIContext.Provider>
  );
};

export const useCLI = () => {
  const context = useContext(CLIContext);
  if (!context) {
    throw new Error('useCLI must be used within CLIProvider');
  }
  return context;
};
