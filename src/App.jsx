import { MantineProvider, Container, Center, Space} from "@mantine/core";
import "./App.css";

function App() {
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container>
        <Space h="lg"/>
        <Center><img src="./src/assets/elements.jpg" alt="Reactive Elements"/></Center>
        <Center><p style={{"color": "red", "font-size": "24px"}}>BEWARE: This page contains React-ive elements</p></Center>
        <Center h="0"><p>(this website hosted by Tanner Gladson)</p></Center>
      </Container>
    </MantineProvider>
  );
}

export default App;
