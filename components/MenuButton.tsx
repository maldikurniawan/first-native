import React, { FC, ReactNode } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import tw from 'twrnc';

interface Props {
    name: string;
    onPress: () => void;
    icon: ReactNode;
}

const MenuButton: FC<Props> = ({ name, onPress, icon }) => {
    return (
        <View style={[tw`flex items-center basis-1/4`, { elevation: 2 }]}>
            <View style={[tw`overflow-hidden rounded-xl`, { elevation: 2 }]}>
                <TouchableHighlight onPress={onPress}>
                    <View
                        style={[
                            tw`justify-center items-center rounded-xl bg-red-500`,
                            { width: scale(65), height: scale(65) },
                        ]}
                    >
                        {icon}
                    </View>
                </TouchableHighlight>
            </View>
            <Text
                style={[
                    tw`font-semibold mt-1 text-center dark:text-gray-500 my-2 align-middle`,
                    { fontSize: scale(10) },
                ]}
            >
                {name}
            </Text>
        </View>
    );
};

export default MenuButton;
