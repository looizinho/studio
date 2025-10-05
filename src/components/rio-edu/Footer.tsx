import { BookMarked } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookMarked className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">help</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            &copy; {currentYear} help. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
