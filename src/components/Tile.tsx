import { motion } from "framer-motion";
import React from "react";

interface TileProps {
  id: string | undefined;
  children: React.ReactNode;
  onToggle: any;
  isSet: boolean;
  isWon: boolean;
  index?: number;
}
function Tile({ id, children, onToggle, isSet, isWon }: TileProps) {
  return (
    <motion.div
      id={id}
      animate={{ scale: isWon ? 0 : 1 }}
      onClick={onToggle}
      className={`tile ${isSet ? "tile--set" : ""}`}
    >
      {children}
    </motion.div>
  );
}
export default Tile;
