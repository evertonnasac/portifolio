"use client"

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Definindo o tipo de estado
type PositionType = "fixed" | "static";

// Definindo o tipo do contexto
type ContextType = {
  position: PositionType;
  setPosition: Dispatch<SetStateAction<PositionType>>;
};

// Crie o contexto
export const PositionContext = createContext<ContextType >({position : "static", setPosition: ()=> {}});


export function PositionProvider({ children }: { children: ReactNode }) {
    const [position, setPosition] = useState<PositionType>("static");
  
    return (
      <PositionContext.Provider value={{ position, setPosition }}>
        {children}
      </PositionContext.Provider>
    );
  }
  
  /*</PositionContext.Provider>
  // Crie um gancho personalizado para usar o contexto
  export function usePosition() {
    const context = useContext(PositionContext);
    if (!context) {
      throw new Error("usePosition deve ser usado dentro de um PositionProvider");
    }
    return context;
  }*/