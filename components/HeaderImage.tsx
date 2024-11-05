import React from 'react';
import { View, Text, Image, StatusBar, ImageSourcePropType } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { CLLightBase } from '@/utils/colors';

const HeaderImageComp: React.FC = () => {
    return (
        <>
            <View style={{ width: '100%', height: verticalScale(450), position: 'absolute' }}>
                <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
                    <Image
                        source={require('@/assets/images/bg-utama.png') as ImageSourcePropType}
                        style={{ width: '100%', height: '38%', justifyContent: 'center', position: 'absolute' }}
                    />
                </View>
                <View style={{ width: '100%', height: '100%', top: verticalScale(50), left: moderateScale(24) }}>
                    <Image
                        source={require('@/assets/images/logo-warunqu.png') as ImageSourcePropType}
                        style={{ width: scale(120), height: scale(40) }}
                    />
                    <View style={{ flex: 1, marginTop: verticalScale(20) }}>
                        <Text style={{ fontWeight: "800", fontSize: scale(16), color: CLLightBase }}>
                            Selamat Datang Kembali,
                        </Text>
                        <Text style={{ fontWeight: "200", fontSize: scale(14), color: CLLightBase }}>
                            Masukan akun untuk bergabung
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default HeaderImageComp;
