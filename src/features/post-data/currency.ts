import { FieldType } from "@/src/widgets/form/ui/types";
import { dataInstance } from "./data-instance";

export const postData = async (values: FieldType) => {
  return await dataInstance.post('/data', values).then((response) => response.data)
}