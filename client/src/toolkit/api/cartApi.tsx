import { IProduct } from "@/types/product";
import baseApi from "./baseApi";

interface ICartsResponse {
    data: {
        items: {
            product: IProduct,
            quantity: number
            _id: string
        }[]
    },
    success: boolean
}

const cartApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        addCartItem : builder.mutation({
            query : (data) => ({
                url : `/cart/add-cart-item`,
                data : {
                    productId: data?.productId,
                    quantity: data?.quantity
                },
                method : 'POST',
            }),
            invalidatesTags: ['Carts']
        }),
        updateCartItem : builder.mutation({
            query : ({quantity,itemId}) => ({
                url : `/cart/update-cart-item/${itemId}`,
                method: 'PATCH',
                data: {
                    quantity
                }
            }),
            onQueryStarted : async (arg, {dispatch,queryFulfilled}) => {
                try {
                    const { data } = await queryFulfilled;
                    const updatedItem = data?.data?.items.find((item:any) => item?._id === arg?.itemId)
                    if(data?.success) {
                        dispatch(cartApi.util.updateQueryData('getCarts', undefined, draft => {
                            const item = draft?.data?.items?.find(item => item?._id === arg?.itemId)
                            if(item){
                                item.quantity = updatedItem?.quantity
                            }
                        }))
                    }
                } catch (error) {}
            }
        }),
        deleteCartItem : builder.mutation({
            query : ({itemId}) => ({
                url : `/cart/delete-cart-item/${itemId}`,
                method: 'DELETE',
            }),
            onQueryStarted: async ({ itemId }, { dispatch, queryFulfilled }) => {
                // Optimistically remove the item from the cache
                const patchResult = dispatch(
                    cartApi.util.updateQueryData('getCarts', undefined, (draft) => {
                        
                        const index = draft?.data?.items.findIndex((item) => item._id === itemId);
                        if (index !== -1) {
                            draft?.data?.items.splice(index, 1);
                        }
                    })
                );
        
                try {
                    // Wait for the mutation to complete
                    await queryFulfilled;
                } catch (error) {
                    // Roll back the cache update if the request fails
                    patchResult.undo();
                }
            },
        }),
        getCarts : builder.query<ICartsResponse,undefined>({
            query : () => ({
                url : '/cart/get-carts'
            }),
            providesTags: ['Carts'],
                
        
        })

    })
})

export default cartApi

export const {useAddCartItemMutation,useGetCartsQuery,useUpdateCartItemMutation,useDeleteCartItemMutation} = cartApi