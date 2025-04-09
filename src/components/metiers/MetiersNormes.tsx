
const MetiersNormes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800">
            Normes et Réglementations en Rénovation
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Normes Électriques</h3>
            <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
              <h4 className="font-medium mb-2">NF C 15-100</h4>
              <p className="text-gray-700 text-sm">
                Norme française régissant les installations électriques à basse tension. Elle définit les règles 
                de conception, de réalisation et d'entretien des installations électriques pour assurer la sécurité 
                des personnes et des biens.
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              Tout électricien doit respecter cette norme pour les nouveaux circuits et la mise aux normes 
              des installations existantes. Elle couvre les équipements de protection, le nombre de prises par pièce, 
              les circuits spécialisés, etc.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Normes Plomberie et Sanitaires</h3>
            <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
              <h4 className="font-medium mb-2">NF DTU 60.1 et NF DTU 60.11</h4>
              <p className="text-gray-700 text-sm">
                Documents techniques unifiés qui définissent les règles de l'art pour les travaux de plomberie 
                sanitaire et les installations d'alimentation en eau.
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              Ces normes encadrent les diamètres de canalisations, pressions d'eau, systèmes anti-retour, 
              acoustique des installations et raccordements. Essentielles pour tout plombier intervenant sur votre réseau.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Réglementations Thermiques</h3>
            <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
              <h4 className="font-medium mb-2">RT 2012 et RE 2020</h4>
              <p className="text-gray-700 text-sm">
                Réglementations thermiques définissant les exigences en matière de performance énergétique 
                des bâtiments neufs et des rénovations lourdes. La RE 2020 a remplacé la RT 2012 avec des exigences accrues.
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              Ces réglementations impactent tous les corps de métier liés à l'isolation, au chauffage, 
              à la ventilation et à l'étanchéité à l'air. Elles visent à réduire la consommation énergétique des bâtiments.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Accessibilité PMR</h3>
            <div className="bg-warmBeige-50 p-4 rounded-lg mb-3">
              <h4 className="font-medium mb-2">Loi du 11 février 2005</h4>
              <p className="text-gray-700 text-sm">
                Réglementation pour l'égalité des droits et des chances des personnes handicapées, imposant des normes 
                d'accessibilité pour les établissements recevant du public et certaines catégories de logements.
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              Cette réglementation définit les dimensions minimales des espaces de circulation, hauteurs de prises, 
              accessibilité des sanitaires, etc. Elle concerne particulièrement les menuisiers, plombiers et électriciens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetiersNormes;
