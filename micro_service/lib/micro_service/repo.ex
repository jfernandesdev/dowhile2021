defmodule MicroService.Repo do
  use Ecto.Repo,
    otp_app: :micro_service,
    adapter: Ecto.Adapters.Postgres
end
