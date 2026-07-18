set -e  # Остановка при ошибке

echo "🔐 Генерация ACL файла для Redis..."

# Создаем директорию для данных, если её нет
mkdir -p /data

# Генерируем ACL файл
cat > /data/users.acl << EOF
# Redis ACL файл
# Сгенерирован: $(date)

# Администратор (полный доступ)
user ${REDIS_USER} on >${REDIS_PASSWORD} ~* +@all
EOF

echo "✅ ACL файл создан: /data/users.acl"
echo "📋 Содержимое ACL файла:"
cat /data/users.acl

# Запускаем Redis с ACL файлом
echo "🚀 Запуск Redis с ACL..."
exec redis-server --aclfile /data/users.acl --appendonly yes