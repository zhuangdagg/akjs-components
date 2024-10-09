import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { graphql } from "../graphql-codegen/gql";
import { AddCommentInput } from "../graphql-codegen/graphql";


const client = new ApolloClient({
    uri: 'http://localhost:8000/v1/comment/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpodWFuZyIsInB3ZCI6IjY2NiIsImlhdCI6MTcyNzM1OTIzMn0.Ql8adWrp6anRm7mvaEaqR-n_O9Z0PrTlPZiQ9li5LAk`
    }
})

const list = graphql(`
    query list($topic_id: String!) {
        getComment(topic_id: $topic_id) {
            topic_id, content, from_user_id, createdAt
        }
    }
`)

const addCommentSchema = graphql(`
    mutation addComment($data: addCommentInput) {
        addComment(data: $data) {
            content
        }
    }
`)

export default function setup<T = InMemoryCache>() {
    
    const add = (data: AddCommentInput) => {
        console.log({data})
        return client.mutate({
            mutation: addCommentSchema,
            variables: {data},
            keepRootFields: true
            
        })
    }
    
    return {
        query: {
            list: (topic_id: string = 'course001', parent_id?: string) => client.query({ query: list, variables: { topic_id, parent_id } }) 
        },
        mutate: {
            add
        } 
    }
}