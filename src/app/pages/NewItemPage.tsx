import FormNewItem from "../components/FormNewItem"
import { Layout } from "../layout/Layout"

export const NewItemPage = ( ) => {
  return (
    <Layout title="Añadir producto"> 
      <FormNewItem type = "Añadir" />  
    </Layout>
  )
}
