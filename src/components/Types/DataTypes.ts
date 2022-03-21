
export type fetData = {
    author: string
    children: {
        author: string
        children: []
        created_at: string
        created_at_i: number
        id: number
        options: []
        parent_id: number
        points: null
        story_id: number
        text: string
        title: null
        type: string
        url: null
    }[];
    created_at: string
    created_at_i: number
    id: number
    options: []
    parent_id: null | number;
    points: number
    story_id: null | number
    text: null | string
    title: string
    type: string
    url: string
}