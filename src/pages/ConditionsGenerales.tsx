
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConditionsGenerales = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales | qoob rénovations</title>
        <meta
          name="description"
          content="Conditions générales de qoob rénovations - Conditions d'utilisation de nos services et de notre site web."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-24 pb-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-serif font-bold text-warmBeige-800 mb-6">
              Conditions Générales
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Objet</h2>
              <p>
                Les présentes conditions générales ont pour objet de définir les conditions dans lesquelles 
                la société qoob rénovations fournit ses services et produits à ses clients, ainsi que les 
                conditions d'utilisation de son site web qoobrenovations.com.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Services proposés</h2>
              <p>
                qoob rénovations propose des prestations de services dans le domaine de la rénovation, incluant 
                notamment la rénovation intérieure, la rénovation extérieure, l'isolation, et l'aménagement de 
                cuisines et salles de bains.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Devis et commandes</h2>
              <p>
                Toute demande de prestation fait l'objet d'un devis détaillé, gratuit et sans engagement. Ce devis 
                est valable pour une durée de 3 mois à compter de sa date d'établissement. La commande n'est 
                définitivement confirmée qu'après réception du devis signé avec la mention "Bon pour accord" 
                et versement de l'acompte prévu.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Prix et modalités de paiement</h2>
              <p>
                Les prix sont exprimés en euros et sont entendus toutes taxes comprises (TTC), incluant la TVA 
                au taux en vigueur. Les modalités de paiement sont les suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Un acompte de 30% à la signature du devis</li>
                <li>Des paiements intermédiaires selon l'avancement des travaux</li>
                <li>Le solde à la réception des travaux</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Délais d'exécution</h2>
              <p>
                Les délais d'exécution sont donnés à titre indicatif dans le devis. qoob rénovations s'engage à 
                respecter au mieux les délais annoncés et à informer le client de tout retard prévisible. 
                Toutefois, ces délais peuvent être prolongés en cas de force majeure ou de circonstances 
                exceptionnelles.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Garanties</h2>
              <p>
                qoob rénovations offre les garanties légales suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Garantie décennale pour les travaux relevant de cette garantie</li>
                <li>Garantie de parfait achèvement d'une durée d'un an à compter de la réception des travaux</li>
                <li>Garantie biennale pour les éléments d'équipement dissociables</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Réception des travaux</h2>
              <p>
                À l'achèvement des travaux, un procès-verbal de réception sera établi contradictoirement entre 
                le client et qoob rénovations. Ce document mentionnera les éventuelles réserves et le délai 
                imparti pour leur levée.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Résiliation</h2>
              <p>
                Le client peut annuler sa commande dans un délai de 14 jours à compter de la signature du devis, 
                sauf si les travaux ont commencé avec son accord. En cas d'annulation après ce délai, l'acompte 
                versé restera acquis à qoob rénovations à titre d'indemnité.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Propriété intellectuelle</h2>
              <p>
                Tous les éléments du site qoobrenovations.com sont protégés par le droit de la propriété 
                intellectuelle. La reproduction ou représentation, intégrale ou partielle, des pages, des 
                données ou de tout autre élément constitutif au site, par quelque procédé ou support que ce soit, 
                est interdite sans autorisation préalable écrite de qoob rénovations.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">10. Protection des données personnelles</h2>
              <p>
                Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion de 
                la relation client. Pour plus d'informations, consultez notre 
                <a href="/confidentialite" className="text-primary hover:underline"> Politique de confidentialité</a>.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">11. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes conditions générales sont soumises au droit français. En cas de litige, les tribunaux 
                français seront seuls compétents.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
              <p>
                Pour toute question concernant ces conditions générales, vous pouvez nous contacter :
                <br />
                Email : qoob.sas@gmail.com
                <br />
                Téléphone : 07 85 01 06 33
                <br />
                Courrier : qoob rénovations, 987 route du Bladet, 47800 Lavergne, France
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ConditionsGenerales;
