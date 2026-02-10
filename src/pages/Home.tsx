import Footer from "../components/Footer";
import FeatureBlock from "../components/FeatureBlock";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 pb-16 sm:pb-24 md:pb-32 px-4">
        <img
          src="/limaedigital.svg"
          alt="limaedigital logo"
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
        />
      </main>

      <FeatureBlock id="description" title="LIMAE DIGITAL" subtitle="Accompagnement des particuliers, entreprises et organisations dans leur transformation numérique en proposant une expertise globale, de la stratégie à la mise en œuvre opérationnelle.">
        <p>
          Nous intervenons en conseil, conception et développement de sites internet, 
          d’applications mobiles et de solutions logicielles sur mesure, tout en assurant 
          leur maintenance, leur évolution et leur pérennité. Nous prenons également en charge
          la gestion, le pilotage et la coordination de projets numériques, 
          incluant l’assistance à maîtrise d’ouvrage et la direction de projets informatiques complexes.
        </p>
        <p>
          LIMAE DIGITAL conçoit et déploie des stratégies de communication et de diffusion digitales adaptées 
          aux enjeux de visibilité, de valorisation et de performance. Nous accompagnons nos clients à travers 
          le conseil, la formation et l’accompagnement opérationnel, en lien avec la création et l’exploitation 
          de contenus, de produits et de services numériques.
        </p>
        <p>
          Nous proposons par ailleurs des services d’hébergement, d’administration et d’exploitation de sites internet, 
          d’applications et de plateformes numériques, pour notre propre compte ou pour celui de nos clients, 
          en garantissant fiabilité, sécurité et continuité de service.
        </p>
        <p>
          Enfin, LIMAE DIGITAL assure la création, la production et la diffusion de contenus numériques et audiovisuels — 
          photographiques, textuels, artistiques ou multimédias. Depuis la conception jusqu’à la post-production, l’édition, 
          la commercialisation et la promotion, sur l’ensemble des supports digitaux, notamment le web et les réseaux sociaux.
        </p>
      </FeatureBlock>

      <FeatureBlock id="services" title="Mes services" subtitle="Solutions sur mesure pour votre croissance">
        <ul className="list-disc ml-4 sm:ml-6">
          <li><strong>Accompagnement digital</strong> personnalisé</li>
          <li><strong>Conception et développement</strong> d’application web</li>
          <li><strong>Création et personnalisation</strong> de site internet</li>
        </ul>
      </FeatureBlock>

      <FeatureBlock id="contact" title="Contactez‑moi" subtitle="Envie d'échanger ? Voici comment me joindre">
        <p>
          Pour toute question ou demande de devis, contactez-moi par email ou téléphone :
        </p>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-6 md:gap-12">
          <a href="mailto:contact@limae.digital" className="inline-block bg-[#646cff] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-[#535bf2] transition text-center">contact@limae.digital</a>
          <a href="tel:+33680908543" className="inline-block bg-[#646cff] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-[#535bf2] transition text-center">+33 (0) 6 80 90 85 43</a>
        </div>
        <p>
          Ou retrouvez-moi sur les plateformes suivantes :
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <a href="https://www.malt.fr/profile/aujajames1" target="_blank" rel="noopener noreferrer"><img
            src="/malt.png"
            alt="Limae Digital sur Malt logo"
            className="max-w-3xs"
          /></a>
          <a href="https://www.allovoisin.com/p/limae-digital" target="_blank" rel="noopener noreferrer"><img
            src="/allovoisin.png"
            alt="Limae Digital sur AlloVoisin logo"
            className="max-w-3xs"
          /></a>
          <a href="https://www.linkedin.com/company/limae-digital" target="_blank" rel="noopener noreferrer"><img
            src="/linkedin.png"
            alt="Limae Digital sur LinkedIn logo"
            className="max-w-3xs"
          /></a>
        </div>
      </FeatureBlock>
      <Footer />
    </div>
  );
}
//  className="h-36 sm:h-48 md:h-64 lg:h-80"