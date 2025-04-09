
const MetiersFAQ = () => {
  return (
    <section className="py-16 bg-warmBeige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800 text-center">
            Questions Fréquentes sur les Métiers de la Rénovation
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Comment choisir le bon artisan pour mes travaux ?</h3>
              <p className="text-gray-700">
                Vérifiez les qualifications et certifications (RGE, Qualibat), demandez des références et photos de réalisations 
                similaires, et assurez-vous que l'artisan est assuré avec une garantie décennale. Avec qoob rénovations, 
                nous sélectionnons pour vous des artisans qualifiés et expérimentés dans chaque domaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Quelle différence entre un artisan et une entreprise générale du bâtiment ?</h3>
              <p className="text-gray-700">
                Un artisan est spécialisé dans un métier spécifique (plomberie, électricité, etc.) tandis qu'une entreprise générale 
                coordonne plusieurs corps de métier pour des projets complets. qoob rénovations agit comme entreprise générale 
                en coordonnant des artisans experts, vous offrant ainsi le meilleur des deux mondes : expertise spécialisée et coordination globale.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Quels métiers sont indispensables pour rénover une salle de bains ?</h3>
              <p className="text-gray-700">
                Une rénovation complète de salle de bains nécessite généralement l'intervention d'un plombier (sanitaires, évacuations), 
                d'un électricien (éclairage, prises sécurisées), d'un carreleur (sol et murs), et parfois d'un menuisier 
                pour les meubles sur mesure. Un étanchéiste peut également intervenir pour l'imperméabilisation des zones humides.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2 text-warmBeige-800">Comment savoir si un artisan respecte les normes en vigueur ?</h3>
              <p className="text-gray-700">
                Un artisan sérieux doit pouvoir vous présenter ses certifications et qualifications. Il doit également 
                vous fournir, en fin de travaux, des attestations de conformité (comme le Consuel pour l'électricité). 
                Chez qoob rénovations, nous garantissons que tous nos intervenants respectent les normes et réglementations 
                en vigueur, et nous vous fournissons tous les documents nécessaires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetiersFAQ;
