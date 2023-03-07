import { useStore } from "@nanostores/react";
import { AddList, HomeStore } from "../stores/ListStores";
import { ContainerHome, ContainerList, IconUser, List, Page, SmallText, TextContainer, Textlist, TextUser, Titre, UserContainer, IdContainer} from "../styles/Home.style";

/**
 * Composant d'accueil de l'application
 */
export default function Home() {

    const {TodoList} = useStore(HomeStore)
    return(
        <Page>
             <Titre>Mes Todos</Titre>
                {TodoList.map((todo, index) => (
                 <ContainerHome key={index}>
                     <UserContainer>
                        <IconUser><i className="fa-solid fa-user"></i></IconUser>
                         <IdContainer>
                             <SmallText>Par</SmallText>
                              <TextUser>Rose</TextUser>
                        </IdContainer>
                    </UserContainer>   
                     <ContainerList>
                          <TextContainer>{todo.label}</TextContainer>
                    </ContainerList>
                  </ContainerHome>
              ))}
                 <List onClick={AddList}>
                     <i className="fa-solid fa-circle-plus"></i>
                     <Textlist>Nouvelle liste</Textlist>
                  </List>
         </Page>
      )
}