import { motion } from "framer-motion";
import React from "react";

interface TileProps {
  id: string | undefined;
  children: React.ReactNode;
  onToggle: any;
  isSet: boolean;
  isWon: boolean;
  index?: number;
  isCenter: boolean;
}
function Tile({ id, children, onToggle, isSet, isWon, isCenter }: TileProps) {
  React.useEffect(() => {
    if (isCenter) {
      onToggle(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCenter]);
  return (
    <motion.div
      id={id}
      animate={{ scale: isWon ? 0 : 1 }}
      onClick={isCenter ? null : onToggle}
      className={`tile ${isCenter || isSet ? "tile--set" : ""}`}
    >
      {isCenter ? "Sensory😻" : children}
    </motion.div>
  );
}
export default Tile;
