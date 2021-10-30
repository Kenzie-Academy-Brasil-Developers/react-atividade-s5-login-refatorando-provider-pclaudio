export interface GenericPostProps {
  url: string;
  data: object;
}

export interface CustomAxiosResponse extends AxiosResponse<any, any> {
  data: {
    token: string;
    message: string;
  };
  response?: {
    data: {
      message: string;
    };
  };
  status: number;
}
