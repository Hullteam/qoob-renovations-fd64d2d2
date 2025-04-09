
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | qoob rénovations</title>
        <meta
          name="description"
          content="Mentions légales de qoob rénovations - Informations juridiques concernant notre entreprise et l'utilisation de notre site web."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-24 pb-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-serif font-bold text-warmBeige-800 mb-6">
              Mentions Légales
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Informations légales</h2>
              <p>
                Le site qoobrenovations.com est édité par :
                <br />
                qoob SAS
                <br />
                Forme juridique : Société par actions simplifiée
                <br />
                Capital social : 10 000 €
                <br />
                Siège social : 987 route du Bladet, 47800 Lavergne, France
                <br />
                SIRET : 123 456 789 00012
                <br />
                N° TVA Intracommunautaire : FR 12 123456789
                <br />
                Directeur de la publication : [Nom du directeur]
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Hébergement</h2>
              <p>
                Ce site est hébergé par :
                <br />
                [Nom de l'hébergeur]
                <br />
                [Adresse de l'hébergeur]
                <br />
                [Téléphone de l'hébergeur]
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Conditions d'utilisation</h2>
              <p>
                L'utilisation du site qoobrenovations.com implique l'acceptation pleine et entière des conditions 
                générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être 
                modifiées ou complétées à tout moment.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Propriété intellectuelle</h2>
              <p>
                Tous les éléments de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
                sont la propriété exclusive de qoob rénovations à l'exception des éléments provenant de partenaires. 
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
                écrite préalable de qoob rénovations.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Responsabilité</h2>
              <p>
                qoob rénovations ne pourra être tenue responsable des dommages directs ou indirects causés au 
                matériel de l'utilisateur lors de l'accès au site, résultant de l'utilisation d'un matériel ne 
                répondant pas aux spécifications techniques requises, de bugs ou d'incompatibilités.
              </p>
              <p>
                qoob rénovations ne pourra également être tenue responsable des dommages indirects consécutifs 
                à l'utilisation du site qoobrenovations.com.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites internet ou d'autres ressources disponibles 
                sur Internet. qoob rénovations ne dispose d'aucun moyen pour contrôler les sites en connexion avec 
                son site et ne répond pas de la disponibilité de tels sites et sources externes.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits 
                concernant vos données personnelles. Pour plus d'informations, veuillez consulter notre 
                <a href="/confidentialite" className="text-primary hover:underline"> Politique de confidentialité</a>.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
              <p>
                Tout litige en relation avec l'utilisation du site qoobrenovations.com est soumis au droit français. 
                L'utilisateur reconnaît la compétence exclusive des tribunaux compétents de [Ville].
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Contactez-nous</h2>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
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

export default MentionsLegales;
