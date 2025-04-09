
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Confidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | qoob rénovations</title>
        <meta
          name="description"
          content="Politique de confidentialité de qoob rénovations - Découvrez comment nous traitons vos données personnelles conformément au RGPD."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-24 pb-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-serif font-bold text-warmBeige-800 mb-6">
              Politique de Confidentialité
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Chez qoob rénovations, nous accordons une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons 
                vos informations lorsque vous visitez notre site web ou utilisez nos services.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données à caractère personnel est :
                <br />
                qoob rénovations
                <br />
                987 route du Bladet
                <br />
                47800 Lavergne, France
                <br />
                Email : qoob.sas@gmail.com
                <br />
                Téléphone : 07 85 01 06 33
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Données collectées</h2>
              <p>Nous collectons les types de données suivants :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
                <li>Données relatives à votre projet : description, adresse du projet, budget</li>
                <li>
                  Données de navigation : cookies, adresse IP, pages visitées, date et heure de connexion, 
                  type de navigateur
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Finalités du traitement</h2>
              <p>Nous traitons vos données personnelles pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Répondre à vos demandes de devis ou d'information</li>
                <li>Exécuter les contrats conclus entre vous et notre entreprise</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Base légale du traitement</h2>
              <p>Nous traitons vos données sur les bases légales suivantes :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Votre consentement</li>
                <li>L'exécution d'un contrat auquel vous êtes partie</li>
                <li>Le respect de nos obligations légales</li>
                <li>Notre intérêt légitime (qui ne porte pas atteinte à vos droits et libertés)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Durée de conservation</h2>
              <p>
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire à l'accomplissement 
                des finalités pour lesquelles elles ont été collectées, ou pour se conformer à des exigences légales 
                ou réglementaires.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Destinataires des données</h2>
              <p>
                Les données collectées sont destinées à nos services internes. Elles peuvent être transmises à 
                des sous-traitants pour l'exécution de certaines prestations (hébergement du site, maintenance, etc.).
                Nous nous assurons que ces tiers respectent le RGPD et garantissent un niveau de protection adéquat.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
                <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par email à qoob.sas@gmail.com ou par courrier 
                à l'adresse mentionnée ci-dessus. Nous traiterons votre demande dans les meilleurs délais et au plus 
                tard dans un délai d'un mois.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer 
                votre navigateur pour refuser tous les cookies ou pour être informé lorsqu'un cookie est envoyé. 
                Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies 
                sont désactivés.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">10. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer la 
                sécurité de vos données personnelles, y compris la protection contre le traitement non autorisé 
                ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">11. Transfert de données hors UE</h2>
              <p>
                Nous ne transférons pas vos données personnelles en dehors de l'Union européenne. Si un tel 
                transfert devait avoir lieu, nous mettrions en place des garanties appropriées conformément 
                au RGPD.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">12. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
                vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de 
                l'Informatique et des Libertés).
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">13. Modification de la politique de confidentialité</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications entreront en vigueur dès leur publication sur notre site web. Nous vous 
                encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Confidentialite;
