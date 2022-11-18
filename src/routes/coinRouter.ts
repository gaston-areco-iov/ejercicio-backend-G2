import { Router } from 'express'
import { getAllCoinsController, getCoinController, postCoinController, updateCoinController, deleteCoinController } from '../controllers/coinController'

const coins = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    CoinBody:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        quotationReference:
 *          type: number
 *        annualPerformance:
 *          type: number
 *    CoinResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        quotationReference:
 *          type: number
 *        annualPerformance:
 *          type: number
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: coins
 */
/**
 * @swagger
 * /coins:
 *  get:
 *    summary: List all coins
 *    tags: [coins]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/CoinResponse'
 *  post:
 *    summary: Create a new coin
 *    tags: [coins]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CoinBody'
 *    responses:
 *      201:
 *        description: Created coin
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CoinResponse'
 */
/**
 * @swagger
 * /coins/{id}:
 *  put:
 *    summary: Update a coin
 *    tags: [coins]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the coin to update
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CoinBody'
 *    responses:
 *      200:
 *        description: Updated coin
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/CoinResponse'
 *  delete:
 *    summary: Delete a coin
 *    tags: [coins]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the coin to delete
 *    responses:
 *      200:
 *        description: Deleted coin
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/CoinResponse'
 *            example:
 *                id: 1
 *                name: "ETH"
 *                description: "ether"
 *                quotationReference: 20
 *                annualPerformance: 10
 *                isActive: false
 */

coins.route('/').get(getAllCoinsController).post(postCoinController)
coins.route('/:id').get(getCoinController).put(updateCoinController).delete(deleteCoinController)

export default coins