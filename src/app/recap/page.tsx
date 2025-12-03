"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface Invoice {
  id: string;
  name: string;
  email: string;
  amount: string;
  password?: string;
}


const Page = () => {
  const router = useRouter();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [showPassword, setShowPassword] = useState<string | null>(null);
  useEffect(() => {
    // Récupère les données du localStorage
    const data = localStorage.getItem("invoices");
    if (data) {
      setInvoices(JSON.parse(data));
    }
  }, []);

  const passwordToShow = invoices.find((inv: Invoice) => inv.id === showPassword)?.password;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
       
      <Table>
  <TableCaption>A list of your recent connection.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Nom</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Mot de passe</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
   {invoices.map((invoice: Invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowPassword(invoice.id)}
                  >
                    Voir mot de passe
                  </Button>
                </TableCell>
            </TableRow>

            ))}
  </TableBody>
</Table>
 {showPassword && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <p className="mb-4">
                Mot de passe : <span className="font-mono">{passwordToShow || "Non disponible"}</span>
              </p>
              <Button
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                onClick={() => setShowPassword(null)}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}
 <Button
 
  className="mb-8 bg-red-600 hover:bg-red-700 text-white"
  onClick={() => {
    localStorage.removeItem("invoices");
    setInvoices([]); // Vide aussi l’état local
  }}
>
  Supprimer toutes les données
</Button>
<Button
  className="mb-8 bg-gray-400 hover:bg-gray-500 text-white"
  onClick={() => router.back()}
>
  Retour
</Button>
    </div>
  </div>
  )
}

export default Page
