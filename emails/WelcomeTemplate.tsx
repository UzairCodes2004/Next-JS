import React, { CSSProperties } from 'react'
import {Html,Body,Tailwind,Container,Text,Link,Preview} from '@react-email/components'
const WelcomeTemlate = ({name}:{name:string}) => {
  return (
    <div>
    <Html>
        <Body>
        <Container>
            <Text>
                Hello {name}
                <Link href="https://google.com">Grt back ??</Link>
            </Text>
        </Container>
        </Body>
    </Html>
    </div>
  )
}


const body:CSSProperties={
   background :"#fff"
    

}
const heading :CSSProperties={
    fontSize: "30px"
}

 

export default WelcomeTemlate
