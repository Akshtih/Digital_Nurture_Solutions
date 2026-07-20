import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

    test("should return repository names for techiesyed", async () => {

        const repos = [

            {

                id: 1,

                name: "React"

            },

            {

                id: 2,

                name: "SpringBoot"

            }

        ];

        axios.get.mockResolvedValue({

            data: repos

        });

        const response = await GitClient.getRepositories("techiesyed");

        expect(response.data).toEqual(repos);

    });

});