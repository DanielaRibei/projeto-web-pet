import { apiKey, baseUrl } from "../../../lib/tmdb"
import type { NextApiRequest, NextApiResponse } from "next"
import { Dog } from "../../data/@types/dogs"


export default async (req: NextApiRequest, res: NextApiResponse<Dog>) => {
  const response = await fetch(`${baseUrl}/breeds?api_key=${apiKey}`)
  const data = await response.json()

  res.status(200).json(data)
}