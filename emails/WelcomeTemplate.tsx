import React from 'react'
import {Html,Body,Container,Text,Link,Preview} from '@react-email/components'
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

export default WelcomeTemlate
