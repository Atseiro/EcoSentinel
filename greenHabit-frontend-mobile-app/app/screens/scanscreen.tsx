import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'; // Utilisez CameraView et useCameraPermissions
import axios from 'axios';

// Définir un type pour les données du produit
type ProductData = {
  status: number;
  product: {
    product_name: string;
    brands: string;
    image_url: string;
    ecoscore_grade: string;
  };
};

const ScanScreen: React.FC = () => {
  const [facing, setFacing] = useState<CameraType>('back'); // Type de caméra (avant/arrière)
  const [permission, requestPermission] = useCameraPermissions(); // Gestion des permissions
  const [scanned, setScanned] = useState<boolean>(false); // État du scan
  const [productData, setProductData] = useState<ProductData['product'] | null>(null); // Données du produit
  const [loading, setLoading] = useState<boolean>(false); // État de chargement

  // Si les permissions ne sont pas encore chargées
  if (!permission) {
    return <View />;
  }

  // Si les permissions ne sont pas accordées
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Nous avons besoin de votre permission pour utiliser la caméra.</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Accorder la permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Fonction pour basculer entre la caméra avant et arrière
  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  // Fonction pour gérer le scan d'un code-barres
  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanned(true);
    setLoading(true);

    try {
      // Récupérer les informations du produit à partir de l'API Open Food Facts
      const response = await axios.get<ProductData>(`https://world.openfoodfacts.org/api/v3/product/${data}.json`);
      if (response.data.status === 1) {
        setProductData(response.data.product);
      } else {
        setProductData(null);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données du produit :', error);
      setProductData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Scanner un produit</Text>

      {/* Scanner */}
      <View style={styles.scannerContainer}>
        <CameraView
          style={styles.camera}
          facing={facing} // Utilisez la caméra avant ou arrière
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned} // Gestion du scan
          barcodeScannerSettings={{
            barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'qr'], // Types de codes-barres supportés
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
              <Text style={styles.flipButtonText}>Changer de caméra</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
        {scanned && (
          <TouchableOpacity style={styles.rescanButton} onPress={() => setScanned(false)}>
            <Text style={styles.rescanButtonText}>Scanner à nouveau</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Affichage des informations du produit */}
      {loading ? (
        <ActivityIndicator size="large" color="#2ecc71" style={styles.loadingIndicator} />
      ) : (
        productData && (
          <View style={styles.productInfoContainer}>
            <Text style={styles.productName}>{productData.product_name}</Text>
            <Text style={styles.productBrand}>Marque : {productData.brands}</Text>

            {/* Affichage de l'image du produit */}
            {productData.image_url && (
              <Image source={{ uri: productData.image_url }} style={styles.productImage} />
            )}

            {/* Impact écologique */}
            <Text style={styles.sectionTitle}>Impact écologique</Text>
            <Text style={styles.productText}>
              Ce produit est {productData.ecoscore_grade === 'A' ? 'très écologique' : 'peu écologique'}.
            </Text>

            {/* Conseils */}
            <Text style={styles.sectionTitle}>Conseils</Text>
            <Text style={styles.productText}>
              {productData.ecoscore_grade === 'A'
                ? 'Ce produit est une excellente option pour votre santé et la planète.'
                : 'Envisagez des alternatives plus écologiques pour réduire votre impact environnemental.'}
            </Text>

            {/* Alternatives écologiques */}
            <Text style={styles.sectionTitle}>Alternatives écologiques</Text>
            <Text style={styles.productText}>
              Recherchez des produits locaux ou avec un meilleur score écologique.
            </Text>
          </View>
        )
      )}

      {/* Message si aucun produit n'est trouvé */}
      {!productData && scanned && !loading && (
        <Text style={styles.noProductText}>Aucune information trouvée pour ce produit.</Text>
      )}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#2c3e50',
  },
  permissionButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  permissionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scannerContainer: {
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  flipButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  rescanButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#2ecc71',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  rescanButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  productBrand: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#2c3e50',
  },
  productText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 10,
  },
  noProductText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#e74c3c',
    marginTop: 20,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default ScanScreen;