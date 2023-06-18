import FormNewItem from "../components/FormNewItem"
import { Layout } from "../layout/Layout"

export const NewItemPage = ({ items, setItems, setNewItem }) => {
  return (
    <Layout title="Añadir producto"> 
      <FormNewItem 
        items={items}
        setItems={setItems}
        setNewItem={setNewItem}
      />  
    </Layout>
  )
}
