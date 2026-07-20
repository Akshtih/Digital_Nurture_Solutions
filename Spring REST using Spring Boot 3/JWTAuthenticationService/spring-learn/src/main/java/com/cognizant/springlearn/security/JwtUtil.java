package com.cognizant.springlearn.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private static final String SECRET = "mySecretKeyForJwtTokenGenerationThatNeedsToBeAtLeast32Chars";
    private static final long EXPIRATION_TIME = 60 * 60 * 1000;

    private final SecretKey signingKey = Keys.hmacShaKeyFor(SECRET.getBytes());

    public String generateToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);
        return Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(signingKey)
                .compact();
    }
}
