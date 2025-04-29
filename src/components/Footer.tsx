export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-6 mt-12 text-center text-sm">
      <div className="container mx-auto">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        {/* Add social links or other footer content later */}
      </div>
    </footer>
  );
}
