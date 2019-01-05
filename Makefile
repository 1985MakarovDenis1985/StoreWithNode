



start:
	@node server/server.js


: refresh_users refresh_prod
	@echo "refresh all data"

refresh_users:
	@node server/migrations/users.js

refresh_prod:
	@node server/migrations/prod.js
