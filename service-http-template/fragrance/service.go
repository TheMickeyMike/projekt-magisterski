package fragrance

import (
	"context"
)

type ListOptions struct{}

type Service interface {
	List(context.Context, *ListOptions) ([]Fragrance, error)
	// Get(*gin.Context)
	// Create(*gin.Context)
	// Delete(*gin.Context)
}

type ServiceOp struct {
	fragrances []Fragrance
}

func NewService(fragrances []Fragrance) Service {
	return &ServiceOp{fragrances}
}

func (s *ServiceOp) List(context.Context, *ListOptions) ([]Fragrance, error) {
	return s.fragrances, nil
}
