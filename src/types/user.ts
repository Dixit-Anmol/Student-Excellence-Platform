export interface User {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    events?: Event[];
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    studentId: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}
