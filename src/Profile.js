import {Image, View, Text} from "react-native";
import Margin from "./Margin";
import styled from 'styled-components/native'


const Container = styled.View`
    flex-direction: row;
`;

const ProfileImage = styled.Image`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px; 
    borderRadius:${(props) => props.size* 0.4}px;
`;
const TextContainer = styled.View`
    justifyContent:center;
    margin-left:10px;
`;
const NameText = styled.Text`
    font-weight: ${(props)=>props.isMe ? "bold" : "normal"};
    font-size : ${(props) => props.isMe ? 16 : 15}px;
`;
const ProfileText = styled.Text`
    font-size : ${(props) => props.isMe ? 12 : 11}px;
    color : grey;
`;

export default ({uri, name, introduction, isMe }) => {
    const size = isMe ? 50 : 40;
    return (
        // <View style={{flexDirection:"row"}}>
        <Container>
            <ProfileImage source={{uri}} size = {size} />
            {/* <Image source={{uri}} style={{width:size, height:size, borderRadius:size * 0.4}}/> */}
            {/* <View style={{ justifyContent:"center", marginLeft:10}}> */}
            <TextContainer>
                <NameText isMe={isMe}>{name}</NameText>
                {/* <Text style={{fontWeight: isMe ? "bold" : undefined, fontSize: isMe ? 16 : 15}}>{name}</Text> */}
                {!!introduction && (
                    <View>
                        <Margin height={isMe ? 6 : 2}/>
                        <ProfileText isMe={isMe}>{introduction}</ProfileText>
                        {/* <Text style={{fontSize: isMe ? 12 : 11, color:"grey"}}>{introduction}</Text> */}
                    </View>
                )}

            </TextContainer>
        </Container>
        // </View>
    )
}