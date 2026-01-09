export interface HttpAdapter {
  post<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
  patch<T>(url: string, data: any): Promise<T>;
}
