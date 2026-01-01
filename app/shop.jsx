import { SafeAreaView } from "react-native-safe-area-context";
import { Appearance, ScrollView, StyleSheet, Platform, FlatList, View, Text, Image} from "react-native";
import { Colors } from "@/constants/theme";
import { SHOP_ITEMS } from "@/constants/ShopItems";
import SHOP_IMAGES from "@/constants/ShopImage";

export default function ShopScreen() {

    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)
    
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const sepComp = <View style = {styles.separator} />
   // const headerComp = <Text>Top of list</Text>
    const footerComp = <Text style={{color: theme.text}}>End of Shop Items</Text>
    return (
        <Container>
            <FlatList
                data = {SHOP_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={sepComp}
               // ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                renderItem={({item}) =>(
                    <View style={styles.row}>
                        <View style={styles.shopItemsRow}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <Image 
                        source={SHOP_IMAGES[item.id - 1]} 
                        style={styles.shopItemImage}
                        />
                    </View>
                    
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 20,
            paddingBottom: 30,
            backgroundColor: theme.background,

        },

        separator: {
            height: 2,
            backgroundColor: colorScheme === 'dark' ? '#444' : '#CCC',
            width: '50%',
            maxWidth: 600,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },

        footerComp: {
            marginHorizontal: 'auto',
            textAlign: 'center',
        },

        row: {
            flexDirection: 'row',
            height: 400,
            width: '100%',
            maxWidth: 600,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: colorScheme === 'dark' ? '#c2c2c2ff' : '#131313ff',
            padding: 0,
            borderRadius: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },

        shopItemsRow: {
            width: '50%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },  
        title: {    
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.text,
        },

        description: {
            marginTop: 5,
            color: theme.text,
        },

        shopItemImage: {
            width: 200,
            height: 400,
        },
    })
}