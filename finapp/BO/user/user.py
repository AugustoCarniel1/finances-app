from core.models import UserModel

import bcrypt

class User:
    def __init__(self):
        self.user = None

    def create_user(self, user_info: dict) -> dict:
        if not self.field_verifier():
            return 
        try:
            username = self.create_default_username(user_info['name'])
            encrypted_password = self.encrypt_password(user_info['password'])
            UserModel(
                cpf=user_info['cpf'],
                name=user_info['name'],
                email=user_info['email'],
                phone=user_info['phone'],
                birth_date=user_info['birth_date'],
                username=username,
                password=encrypted_password
            ).save()
            return {'status': True, 'message': 'Usuário criado com sucesso!'}
        except:
            return {'status': False, 'message': 'Erro ao criar usuário'}
    
    def encrypt_password(self, password: str) -> str:
        encrypted_password = bcrypt.hashpw(bytes(password, 'utf-8'), bcrypt.gensalt(12))
        return encrypted_password
    
    def check_password(self, password: str) -> bool:
        if not bcrypt.checkpw(password, self.user.password):
            return False
        return True
    
    def create_default_username(self, name: str) -> bool:
        name_list = name.split(' ')
        username = ''
        username = username.join([name + ' ' for name in name_list])[:-1]
        return username
    
    def field_verifier(self, cpf, phone):
        pass
