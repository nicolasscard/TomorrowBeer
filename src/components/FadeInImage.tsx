import React, { FC, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, ImageURISource, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    source: ImageURISource;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<Props> = ({ source, style = {} } : Props) => {
    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading && 
                <ActivityIndicator 
                    style={{ position: 'absolute' }} 
                    color={ '#385A64' }
                    size={ 30 }
                />
            }

            <Animated.Image 
                source={source}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity
                }}
                resizeMode={'contain'}
            />
        </View>
    );
}
