import Matter from 'matter-js'
import React from 'react'
import { Image, View } from 'react-native'
import hero from '../assets/hero.png'
const Bird = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody /2
    const yBody = props.body.position.y - heightBody /2

    const color = props.color;

    return(
        <View style={{
            borderWidth: 0,
            shadowColor:"yellow",
            elevation:400,
            shadowOffset:{width:1,height:2},
            shadowRadius:2,
            borderColor: 'yellow',
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            alignItems:'center',
            justifyContent:'center'
            
        }}>
            <Image source={hero}  style={{width: widthBody+20,
            height: heightBody+18,
            bottom:15
            }}/>
            </View>
    )
}

export default (world, color, pos, size) => {
   const initialBird = Matter.Bodies.rectangle(
       pos.x,
       pos.y,
       size.width,
       size.height,
       {label: 'Bird'}
   )
   Matter.World.add(world, initialBird)

   return {
       body: initialBird,
       color,
       pos,
       renderer: <Bird/>
   }
}

