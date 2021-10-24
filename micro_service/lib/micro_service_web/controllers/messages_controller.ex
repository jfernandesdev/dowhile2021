defmodule MicroServiceWeb.MessagesController do 
  use MicroServiceWeb, :controller

  def create(conn, params) do
    IO.inspect(params)

    text(conn, "Recebi a requisição")
  end
end