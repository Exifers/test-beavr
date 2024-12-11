import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as Types from "types";

export const Requirement = {
  useList() {
    return useQuery({
      queryKey: ['requirements'],
      queryFn: async () =>
        axios.get<Types.Requirements>('/requirements')
          .then(response => response.data)
    })
  }
}