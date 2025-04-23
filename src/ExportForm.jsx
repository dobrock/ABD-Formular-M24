
import React from 'react';

export default function ExportForm() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-center mb-4">
        <img src="/logo.svg" alt="MOTORSPORT24 Logo" className="h-16" />
      </div>
      <h1 className="text-2xl font-bold">Neue Ausfuhranmeldung</h1>
      <div className="bg-white p-4 shadow rounded-md">
        <input className="w-full mb-3 p-2 border rounded" placeholder="Auftragsnummer" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Empfängername" />
        <textarea className="w-full mb-3 p-2 border rounded" placeholder="Artikelbeschreibung inkl. HS-Code, Gewicht, Typ..." rows="4" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Ausfuhranmeldung vorbereiten</button>
      </div>
    </div>
  );
}
