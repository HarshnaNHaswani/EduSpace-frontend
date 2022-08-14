import { createContext, useContext, useEffect, useState } from "react";
import { getAllCategoriesService } from "services";
import {
  IdType,
  ProviderParamType,
  SrcType,
  TextType,
} from "__types__/typeUtils/base.types";
type CategoryType = {
  _id: IdType;
  icon: SrcType;
  categoryName: TextType;
  description: TextType;
};
type CategoryProviderValueType = {
  error: string;
  categories: CategoryType[] | [];
  loadState: boolean;
};
const CategoriesContext = createContext<CategoryProviderValueType | undefined>(
  undefined
);

const CategoriesProvider = ({ children }: ProviderParamType) => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [loadState, setLoadState] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        setLoadState(true);
        const response = await getAllCategoriesService();
        if (response.status == 200) {
          setCategories(response.data.categories);
          setLoadState(false);
        } else {
          setError(`${response.status} ${response.statusText ?? ""}`);
          setLoadState(false);
        }
      } catch (error) {
        console.log(error);
        setError(`Unable to load tags`);
        setLoadState(false);
      }
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, loadState, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};

export { CategoriesProvider, useCategories };
