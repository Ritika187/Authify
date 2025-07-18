package com.mydemo.authify.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mydemo.authify.entity.UserEntity;
import com.mydemo.authify.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService{
    private final UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        UserEntity existingUser= userRepository.findByEmail(email)
                   .orElseThrow(() -> new UsernameNotFoundException("Email not found for the email: "+email));
                   return new User(existingUser.getEmail(), existingUser.getPassword(), new ArrayList<>());
    }
}
