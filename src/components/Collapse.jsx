import React, { useState } from "react"; // Importation de la bibliothèque React, HOOK qui permet de gérer l'état du composant fonctionnel (si le composant est ouvert ou fermé).

// composant collapse "A Propos" & "logements" avec trois PROPS, title (titre du collapse) className (donner du style) et children (contenu à afficher lorsque le composant est ouvert) :

const Collapse = ({ title, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // isOpen : variable qui représente si le contenu est ouvert ou fermé. setIsOpen : fonction qui permet de changer d'etat. useState(false) : signifie que le composant est fermé au départ.
  const toggleCollapse = () => {
    // toggleCollapse : fonction qui inverse la valeur de isOpen à chaque appel.
    setIsOpen(!isOpen); // Si isOpen est false, il devient true (ouvre le contenu) / Si isOpen est true, il devient false (ferme le contenu).
  };

  return (
    <div className={className}>
      <div className="collapse-header">
        <h2>{title}</h2>
        <i // icone flèche
          className={`fas fa-chevron-up chevron-icon ${
            isOpen ? "rotated" : "" // si isOpen est true alors classe rotated ajoutée, sinon la classe n'est pas ajoutée.
          }`}
          onClick={toggleCollapse} // Lorsque l'utilisateur clique sur l'icône, cela appelle la fonction toggleCollapse pour ouvrir ou fermer la section.
        ></i>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div> // expression conditionnelle. Si isOpen est true, la partie après && sera rendue dans le DOM.
  ); // Children : prop spécial qui représente le contenu qui est passé entre les balises du composant parent.
};

export default Collapse; // composant Collapse est exporté par défaut (permet à d'autres fichiers de l'importer et de l'utiliser).
