import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Client } from '../../../prisma/generated/nosql-client'

const prisma = new SqlClient()

export const getAllClientRepository = async (req: Request, res: Response): Promise<Client[] | Error> => {
  try {
    return await prisma.client.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const getClientRepository = async (req: Request, res: Response): Promise<Client[] | Error> => {
  try {
    const id = req.params.id

    return await prisma.client.findMany({ where: { id } })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const createClientRepository = async (req: Request, res: Response): Promise<Client | Error> => {
  const { dni, firstName, lastName, email, phoneNumber } = req.body
  try {
    return await prisma.client.create({
      data: {
        dni,
        firstName,
        lastName,
        email,
        phoneNumber
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const updateClientRepository = async (req: Request, res: Response): Promise<Client | Error> => {
  try {
    const data = req.body
    const { id } = req.params
    const client = await prisma.client.findUnique({
      where: {
        id
      }
    })
    if (client === null) {
      return new Error('Record not found')
    }
    if (!client.isActive) {
      return new Error('Invalid id')
    }
    return await prisma.client.update({
      where: {
        id
      },
      data
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteClientRepository = async (req: Request, res: Response): Promise<Client | Error> => {
  try {
    const { id } = req.params
    const client = await prisma.client.findUnique({
      where: {
        id
      }
    })
    if (client === null) {
      return new Error('Record not found')
    }
    if (!client.isActive) {
      return new Error('Client already deleted')
    }
    return await prisma.client.update({
      where: {
        id
      },
      data: {
        isActive: false
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteDefClientRepository = async (req: Request, res: Response): Promise<Client | Error> => {
  try {
    const { id } = req.params
    return await prisma.client.delete({
      where: {
        id: String(id)
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}
