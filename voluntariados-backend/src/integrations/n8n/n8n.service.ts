export class N8nService {
    trigger(event: string, payload: any) {
        console.log('n8n:', event, payload)
    }
}