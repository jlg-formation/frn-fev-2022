import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useLocaleStore} from '../store/locale';
import {gs} from '../styles';

export function LegalScreen() {
  const {t} = useLocaleStore();
  return (
    <View style={styles.container}>
      <Text style={[gs.text, gs.title]}>{t.legal}</Text>
      <ScrollView>
        <View>
          <Text style={gs.text}>
            L'automne est une saison merveilleuse, remplie de couleurs
            chatoyantes et de paysages pittoresques. Les feuilles des arbres
            passent lentement du vert éclatant au rouge, au orange et finalement
            au marron foncé, créant une symphonie de couleurs dans les forêts et
            les parcs. Les matins sont frais et brumeux, invitant à se blottir
            sous une couverture bien chaude avec un bon livre. L'après-midi, le
            soleil brille suffisamment pour nous inciter à sortir et à profiter
            de la nature avant l'arrivée de l'hiver. C'est également une période
            de récolte, avec des stands de fruits et légumes colorés qui
            apparaissent sur les marchés et les étals. En automne, nous prenons
            le temps de apprécier les petits bonheurs de la vie et de nous
            connecter avec la nature avant le froid de l'hiver.
          </Text>
          <Text style={gs.text}>
            Voici des mentions légales génériques que vous pourriez utiliser
            pour votre site web ou votre application : Propriété intellectuelle
            : Le contenu de ce site, y compris les textes, images, graphiques,
            logos, icônes, audio et vidéo clips, et logiciels, est la propriété
            exclusive de [nom de la société] ou de ses fournisseurs de contenu
            et est protégé par les lois internationales sur le droit d'auteur.
            Marques déposées : Les marques de commerce, les logos et les noms de
            produits affichés sur ce site sont des marques déposées de [nom de
            la société] ou de ses affiliés. Restrictions d'utilisation : Le
            contenu de ce site ne peut être copié, reproduit, distribué,
            transmis, affiché, vendu, concédé en licence ou exploité de quelque
            manière que ce soit sans l'autorisation écrite préalable de [nom de
            la société]. Garanties et responsabilités : Ce site est fourni "tel
            quel" sans garantie de quelque nature que ce soit, expresse ou
            implicite. [Nom de la société] décline toute responsabilité pour
            tout dommage direct, indirect, accidentel, consécutif ou spécial
            découlant de l'utilisation de ce site ou de tout autre site lié à
            celui-ci. Liens vers d'autres sites : Ce site peut contenir des
            liens vers des sites tiers. [Nom de la société] n'est pas
            responsable du contenu de ces sites et décline toute responsabilité
            pour tout dommage découlant de l'utilisation de ces sites.
            Modifications : [Nom de la société] se réserve le droit de modifier
            les termes et conditions d'utilisation de ce site à tout moment et
            sans préavis. Droit applicable : Les présentes mentions légales sont
            régies et interprétées conformément au droit [indiquer le droit
            applicable]. Il est important de noter que ces mentions légales
            génériques ne sont fournies qu'à titre indicatif et qu'il est
            recommandé de consulter un avocat pour s'assurer que les mentions
            légales de votre site web ou de votre application sont appropriées
            et conformes à la législation applicable.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
  },
});
