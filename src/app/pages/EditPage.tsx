import FormNewItem from "../components/FormNewItem"
import { Layout } from "../layout/Layout"

export const EditPage = ({ items, setItems, setNewItem }) => {
  return (
    <Layout title="Editar producto"> 
      <FormNewItem 
        items={items}
        setItems={setItems}
        setNewItem={setNewItem}
        type = "Editar"
      />  
    </Layout>
  )
}
