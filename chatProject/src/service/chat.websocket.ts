import {
    WebSocketGateway,
    SubscribeMessage,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
    ConnectedSocket
  } from '@nestjs/websockets';
  import { Server ,Socket} from 'socket.io';
    
  @WebSocketGateway({
    cors:{
      origin:'*',
    },
  })
  export class ChatWebsocket implements  OnGatewayConnection,OnGatewayDisconnect{
    constructor(){}

    private rooms: Map<string, { Id: string, members: Set<string> }> = new Map();

    private keys: Map<string, {roomId:string,boss?:boolean}> = new Map();

    @WebSocketServer()
    server: Server;

    handleConnection(client: any, ...args: any[]) {
        console.log('connect success',client.id);
    }

    handleDisconnect(client: any) {
        console.log('disconnect success',client.id);
    }
      
    @SubscribeMessage('createRoom')
    handleCreateRoom(@MessageBody() data: { userId: string }, @ConnectedSocket() client: Socket) {
      const { userId } = data;
      const roomId = userId // 방 ID 생성 로직은 별도로 구현해야 합니다.
      this.rooms.set(roomId, { Id: userId, members: new Set([client.id]) });
      client.join(roomId);
      this.keys.set(client.id,{roomId:roomId,boss:true})

      // 방 생성 및 방장 지정 메시지 전송
      this.server.to(roomId).emit('roomCreated', { roomId, clientId: client.id });
    }

}