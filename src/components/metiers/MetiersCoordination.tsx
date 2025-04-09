
const MetiersCoordination = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-warmBeige-800">
            Coordination des Corps de Métier
          </h2>
          <p className="text-gray-700 mb-6">
            La réussite d'un projet de rénovation repose en grande partie sur une coordination efficace 
            entre les différents corps de métier. Chez qoob rénovations, nous assurons cette coordination 
            pour garantir que chaque intervention s'intègre harmonieusement dans le processus global.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Ordre d'Intervention</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <span className="font-medium">Travaux de structure et de gros œuvre</span>
                <p className="text-sm mt-1">
                  Abattement de cloisons, création d'ouvertures, renforcements structurels réalisés par les maçons.
                </p>
              </li>
              <li>
                <span className="font-medium">Réseaux techniques</span>
                <p className="text-sm mt-1">
                  Installation des réseaux d'électricité, plomberie et ventilation avant fermeture des murs et plafonds.
                </p>
              </li>
              <li>
                <span className="font-medium">Isolation et cloisons</span>
                <p className="text-sm mt-1">
                  Mise en place de l'isolation thermique et acoustique, puis construction des nouvelles cloisons.
                </p>
              </li>
              <li>
                <span className="font-medium">Revêtements</span>
                <p className="text-sm mt-1">
                  Pose des revêtements de sol, carrelage, puis peintures et finitions murales.
                </p>
              </li>
              <li>
                <span className="font-medium">Menuiseries et équipements</span>
                <p className="text-sm mt-1">
                  Installation des menuiseries intérieures, cuisines, salles de bains et autres aménagements.
                </p>
              </li>
              <li>
                <span className="font-medium">Finitions</span>
                <p className="text-sm mt-1">
                  Dernières retouches, nettoyage et livraison du chantier.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-warmBeige-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-serif font-medium mb-3 text-warmBeige-700">Interactions entre corps de métier</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Certains métiers doivent travailler en étroite collaboration pour garantir la qualité de la rénovation:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <span className="font-medium">Électricien et Plaquiste</span>: coordination pour l'emplacement des boîtiers électriques et passages de câbles avant fermeture des murs.
              </li>
              <li>
                <span className="font-medium">Plombier et Carreleur</span>: planification des arrivées d'eau et évacuations avant la pose du carrelage.
              </li>
              <li>
                <span className="font-medium">Menuisier et Peintre</span>: chronologie des interventions pour éviter d'endommager les finitions.
              </li>
              <li>
                <span className="font-medium">Designer d'intérieur et tous corps d'état</span>: transmission des plans et exigences esthétiques à respecter par chaque intervenant.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetiersCoordination;
